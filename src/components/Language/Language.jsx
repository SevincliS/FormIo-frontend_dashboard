import React from 'react';


class Language extends React.Component {

    render(){
        return (
            <li class="nav-item dropup">
                <a class="dropdown-toggle dropdown-indicator has-indicator nav-link" data-toggle="dropdown" data-offset="0,10"><small>English</small></a>
                   <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                      <ul class="language-list">
                         <li>
                            <a href="#" class="language-item">
                              <img src="./images/flags/english.png" alt="" class="language-flag"/>
                                <span class="language-name">English</span>
                             </a>
                          </li>
                          <li>
                             <a href="#" class="language-item">
                                <img src="./images/flags/spanish.png" alt="" class="language-flag"/>
                                <span class="language-name">Español</span>
                              </a>
                              </li>
                               <li>
                             <a href="#" class="language-item">
                                <img src="./images/flags/french.png" alt="" class="language-flag"/>
                                          <span class="language-name">Français</span>
                                         </a>
                                       </li>
                                      <li>
                                     <a href="#" class="language-item">
                                   <img src="./images/flags/turkey.png" alt="" class="language-flag"/>
                                  <span class="language-name">Türkçe</span>
                             </a>
                        </li>
                    </ul>
                </div>
             </li>
        )
    }
}
    

export default Language