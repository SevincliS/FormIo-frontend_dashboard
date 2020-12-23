import React from 'react';
import Logo from '../../components/Logo/Logo'
import {NavLink} from 'react-router-dom'
import Form2Landing from '../../assets/docs-img/form2-dashboard.png'

const Docs = () => {
    return (
        <>
        <div className="document-wrapper">
            
            <div className="side-nav">
                <Logo/>
                <div className="side-menu-row">
                    <h2>GETTING STARTED</h2>
                    <NavLink to="" >What is a Form2?</NavLink>
                    <NavLink to="" >Requirements</NavLink>
                    <NavLink to="" >Creating a form</NavLink>
                </div>
                <div className="side-menu-row">
                    <h2>COLLECTING SUBMISSIONS</h2>
                    <NavLink to="" >Collecting form submissions</NavLink>
                    <NavLink to="" >Email Notifications</NavLink>
                    <NavLink to="" >Custom Email Notification Templates</NavLink>
                    <NavLink to="" >Handling Checkboxes & Multiple Choices</NavLink>
                    <NavLink to="" >Uploading Files</NavLink>
                    <NavLink to="" >Do's and Don'ts</NavLink>
                    <NavLink to="" >Form Sharing</NavLink>
                    <NavLink to="" >Spam Filtering</NavLink>
                </div>
                <div className="side-menu-row">
                    <h2>USING AJAX</h2>
                    <NavLink to="" >Sending submissions with AJAX?</NavLink>
                    <NavLink to="" >Uploading files with AJAX</NavLink>
                </div>
                <div className="side-menu-row">
                    <h2>USING AJAX</h2>
                    <NavLink to="" >What is Zapier?</NavLink>
                    <NavLink to="" >Creating Zap with Getform</NavLink>
                    <NavLink to="" >Triggering your Submissions</NavLink>
                    <NavLink to="" >Connect your Zap to Other Services</NavLink>
                </div>
                <div className="side-menu-row">
                    <h2>WEEBHOOKS</h2>
                    <NavLink to="" >How to setup a webhook with Getform?</NavLink>
                </div>
                <div className="side-menu-row">
                    <h2>FORM VALIDATION</h2>
                    <NavLink to="" >HTML5 Form Validation</NavLink>
                    <NavLink to="" >FAQ</NavLink>
                </div>
                <div className="side-menu-row">
                    <h2>GETFORM API</h2>
                    <NavLink to="" >Authentication</NavLink>
                    <NavLink to="" >Submission Request</NavLink>
                </div>
            </div>
            <div className="doc-content">
                <h1>Document Title</h1>
                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum tenetur, sint quasi accusantium doloremque, inventore, labore error maiores optio aspernatur quaerat recusandae? Facere repellat quaerat dolorem veniam nemo exercitationem, laboriosam, doloremque incidunt maiores reprehenderit accusantium harum. Possimus perferendis quam, magnam quo quod nobis exercitationem enim nihil totam repudiandae veniam facere assumenda numquam cupiditate doloremque non in id cumque sequi nesciunt nam officia voluptates. Magni omnis quam nesciunt quas reprehenderit placeat sapiente. Consectetur totam nihil natus veniam, fugiat culpa consequuntur dignissimos voluptates ullam recusandae laboriosam nulla! Nostrum optio qui, facere veniam odio cupiditate magni numquam consectetur, rem commodi omnis quidem doloremque!</p>
                <h2>Sub Document Title</h2>
                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum tenetur, sint quasi accusantium doloremque, inventore, labore error maiores optio aspernatur quaerat recusandae? Facere repellat quaerat dolorem veniam nemo exercitationem, laboriosam, doloremque incidunt maiores reprehenderit accusantium harum. Possimus perferendis quam, magnam quo quod nobis exercitationem enim nihil totam repudiandae veniam facere assumenda numquam cupiditate doloremque non in id cumque sequi nesciunt nam officia voluptates. Magni omnis quam nesciunt quas reprehenderit placeat sapiente. Consectetur totam nihil natus veniam, fugiat culpa consequuntur dignissimos voluptates ullam recusandae laboriosam nulla! Nostrum optio qui, facere veniam odio cupiditate magni numquam consectetur, rem commodi omnis quidem doloremque!</p>
                <h3>Small Document Title</h3>
                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum tenetur, sint quasi accusantium doloremque, inventore, labore error maiores optio aspernatur quaerat recusandae? Facere repellat quaerat dolorem veniam nemo exercitationem, laboriosam, doloremque incidunt maiores reprehenderit accusantium harum. Possimus perferendis quam, magnam quo quod nobis exercitationem enim nihil totam repudiandae veniam facere assumenda numquam cupiditate doloremque non in id cumque sequi nesciunt nam officia voluptates. Magni omnis quam nesciunt quas reprehenderit placeat sapiente. Consectetur totam nihil natus veniam, fugiat culpa consequuntur dignissimos voluptates ullam recusandae laboriosam nulla! Nostrum optio qui, facere veniam odio cupiditate magni numquam consectetur, rem commodi omnis quidem doloremque!</p>
                <img src={Form2Landing} alt="form2-landing-page"/>

                <div className="code-card">
                    <p className="bold">{`<form action=`}&nbsp;<span>{"https://getform.io/f/{your-endpoint}"}</span>&nbsp;{`method="POST">`}</p>
                    <p className="soft">&nbsp;&nbsp;&nbsp;&nbsp;{`<input type="text" name="name">`}</p>
                    <p className="soft">&nbsp;&nbsp;&nbsp;&nbsp;{`<input type="email" name="email">`}</p>
                    <p className="soft">&nbsp;&nbsp;&nbsp;&nbsp;{`<input type="text" name="tel">`}</p>
                    <p className="soft">&nbsp;&nbsp;&nbsp;&nbsp;{`<input type="file" name="file">`}</p>
                    <p className="soft">&nbsp;&nbsp;&nbsp;&nbsp;{`<button type="submit">Send</button>`}</p>
                    <p className="bold">{`</form>`}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Docs