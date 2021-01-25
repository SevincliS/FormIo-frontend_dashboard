import React from "react";
import { Button } from "../index";
import axios from "axios";
import { connect } from "react-redux";
import { backendUrl } from "../../config";
import { setToken, getToken } from "../../tokenManager";
import { setUserAction } from "../../redux/actions/userActions";
import { withRouter } from "react-router-dom";
import publicIp from "public-ip";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      browser: "",
      os: "",
      ip: "",
    };
  }

  componentDidMount() {
    this.getOs();
    this.getBrowser();
    this.getIp();
  }

  getIp = async () => {
    let ip = await publicIp.v4({
      fallbackUrls: ["https://ifconfig.co/ip"],
    });
    this.setState({ ip });
  };
  getBrowser = () => {
    const { userAgent } = navigator;

    if (userAgent.includes("Firefox/")) {
      this.setState({ browser: "Firefox" });
    } else if (userAgent.includes("Edg/") || userAgent.includes("Edge")) {
      this.setState({ browser: "Edge" });
    } else if (userAgent.includes("Chrome/")) {
      this.setState({ browser: "Chrome" });
    } else if (userAgent.includes("Safari/")) {
      this.setState({ browser: "Safari" });
    } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
      this.setState({ browser: "Opera" });
    } else if (userAgent.includes("Trident/") || userAgent.includes("MSIE")) {
      this.setState({ browser: "Internet Explorer" });
    }
  };
  getOs = () => {
    const { userAgent } = navigator;
    let clientStrings = [
      { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
      { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
      { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
      { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
      { s: "Windows Vista", r: /Windows NT 6.0/ },
      { s: "Windows Server 2003", r: /Windows NT 5.2/ },
      { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
      { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
      { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
      { s: "Windows 98", r: /(Windows 98|Win98)/ },
      { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
      { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
      { s: "Windows CE", r: /Windows CE/ },
      { s: "Windows 3.11", r: /Win16/ },
      { s: "Android", r: /Android/ },
      { s: "Open BSD", r: /OpenBSD/ },
      { s: "Sun OS", r: /SunOS/ },
      { s: "Chrome OS", r: /CrOS/ },
      { s: "Linux", r: /(Linux|X11(?!.*CrOS))/ },
      { s: "iOS", r: /(iPhone|iPad|iPod)/ },
      { s: "Mac OS X", r: /Mac OS X/ },
      { s: "Mac OS", r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
      { s: "QNX", r: /QNX/ },
      { s: "UNIX", r: /UNIX/ },
      { s: "BeOS", r: /BeOS/ },
      { s: "OS/2", r: /OS\/2/ },
      {
        s: "Search Bot",
        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
      },
    ];
    for (let id in clientStrings) {
      let cs = clientStrings[id];
      if (cs.r.test(userAgent)) {
        this.setState({ os: cs.s });
        break;
      }
    }
  };

  register = async () => {
    const { name, email, password, browser, os, ip } = this.state;
    const { setUser, history } = this.props;
    const date = new Date();
    let time = `${(date.getDate() < 10 ? "0" : "") + date.getDate()}/${
      (date.getMonth() < 9 ? "0" : "") + (date.getMonth() + 1)
    }/${date.getFullYear()} ${
      (date.getHours() < 10 ? "0" : "") + date.getHours()
    }:${(date.getMinutes() < 10 ? "0" : "") + date.getMinutes()}`;
    if (
      email.replaceAll(" ", "") === "" ||
      password.replaceAll(" ", "") === "" ||
      !email.includes(".") ||
      !email.includes("@")
    ) {
      this.setState({ warning: "Invalid email or password" });
      return;
    }
    axios
      .post(`${backendUrl}/users/createUser`, { name, email, password })
      .then((res) => {
        let { error } = res.data;
        let isBrowserDifferent =
          res.data.activities[res.data.activities.length - 1].browser !==
          browser;
        if (!error) {
          let { "x-auth-token": token } = res.headers;
          setUser(res.data);
          if (res.data.saveActivityLogs) {
            let newUser = {
              ...res.data,
              activities: [...res.data.activities, { browser, os, ip, time }],
            };
            axios.post(`${backendUrl}/users/edit`, newUser).then((res) => {
              setUser(newUser);
            });
          }
          if (res.data.newBrowserNotification && isBrowserDifferent) {
            let mailObject = { browser, ip, os, time, email: res.data.email };
            this.sendDifferentBrowserMail(mailObject);
          }
          setToken(token);
          history.push("/");
        } else {
          this.setState({ warning: error });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ warning: String(err) });
      });
  };

  sendDifferentBrowserMail = async ({ browser, os, ip, time, email }) => {
    axios
      .post(`${backendUrl}/users/sendDifferentBrowserMail`, {
        browser,
        os,
        ip,
        time,
        email,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <div class="form-group">
          <label class="form-label" for="name">
            Name
          </label>
          <input
            type="text"
            class="form-control form-control-lg"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="email">
            Email or Username
          </label>
          <input
            type="text"
            class="form-control form-control-lg"
            id="email"
            placeholder="Enter your email address or username"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">
            Password
          </label>
          <div class="form-control-wrap">
            <a
              tabindex="-1"
              href="#"
              class="form-icon form-icon-right passcode-switch"
              data-target="password"
            >
              <em class="passcode-icon icon-show icon ni ni-eye"></em>
              <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
            </a>
            <input
              type="password"
              class="form-control form-control-lg"
              id="password"
              placeholder="Enter your passcode"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
        </div>
        <div class="form-group">
          <div class="custom-control custom-control-xs custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkbox" />
            <label class="custom-control-label" for="checkbox">
              I agree to Dashlite{" "}
              <a tabindex="-1" href="#">
                Privacy Policy
              </a>{" "}
              &amp;{" "}
              <a tabindex="-1" href="#">
                {" "}
                Terms.
              </a>
            </label>
          </div>
        </div>
        <Button
          name={"Register"}
          clickFunction={() => {
            this.register();
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUserAction(user)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
);
