import React from 'react';




class Personal extends React.Component {
    render(){
        return(
            <>
            <div class="nk-block-head">
                <div class="nk-block-head-content">
                    <h5 class="nk-block-title">Personal Information</h5>
                    <div class="nk-block-des">
                        <p>Basic info, like your name and address, that you use on Nio Platform.</p>
                    </div>
                </div>
            </div>

            <div class="card card-bordered">
                <div class="nk-data data-list">

                    <div class="data-item" data-toggle="modal" data-target="#profile-edit">
                        <div class="data-col">
                            <span class="data-label">Full Name</span>
                            <span class="data-value">Abu Bin Ishtiyak</span>
                        </div>
                        <div class="data-col data-col-end"><span class="data-more"><em class="icon ni ni-forward-ios"></em></span></div>
                    </div>

                    <div class="data-item">
                        <div class="data-col">
                            <span class="data-label">Email</span>
                            <span class="data-value">info@softnio.com</span>
                        </div>
                        <div class="data-col data-col-end"><span class="data-more disable"><em class="icon ni ni-lock-alt"></em></span></div>
                    </div>

                    <div class="data-item" data-toggle="modal" data-target="#profile-edit">
                        <div class="data-col">
                            <span class="data-label">Phone Number</span>
                            <span class="data-value text-soft">Not add yet</span>
                        </div>
                        <div class="data-col data-col-end"><span class="data-more"><em class="icon ni ni-forward-ios"></em></span></div>
                    </div>

                    <div class="data-item" data-toggle="modal" data-target="#profile-edit">
                        <div class="data-col">
                            <span class="data-label">Date of Birth</span>
                            <span class="data-value">29 Feb, 1986</span>
                        </div>
                        <div class="data-col data-col-end"><span class="data-more"><em class="icon ni ni-forward-ios"></em></span></div>
                    </div>

                    <div class="data-item" data-toggle="modal" data-target="#profile-edit">
                        <div class="data-col">
                            <span class="data-label">Address</span>
                            <span class="data-value">2337 Kildeer Drive,<br/>Kentucky, Canada</span>
                        </div>
                        <div class="data-col data-col-end"><span class="data-more"><em class="icon ni ni-forward-ios"></em></span></div>
                    </div>

                </div>
            </div>
            
            <div class="nk-block-head">
                <div class="nk-block-head-content">
                    <h5 class="nk-block-title">Personal Preferences</h5>
                    <div class="nk-block-des">
                        <p>Your personalized preference allows you best use.</p>
                    </div>
                </div>
            </div>

            <div class="card card-bordered">
                <div class="nk-data data-list">

                    <div class="data-item">
                        <div class="data-col">
                            <span class="data-label">Language</span>
                            <span class="data-value">English (United State)</span>
                        </div>
                        <div class="data-col data-col-end"><a href="#" data-toggle="modal" data-target="#profile-language" class="link link-primary">Change Language</a></div>
                    </div>

                    <div class="data-item">
                        <div class="data-col">
                            <span class="data-label">Date Format</span>
                            <span class="data-value">M d, YYYY</span>
                        </div>
                        <div class="data-col data-col-end"><a href="#" data-toggle="modal" data-target="#profile-language" class="link link-primary">Change</a></div>
                    </div>

                    <div class="data-item">
                        <div class="data-col">
                            <span class="data-label">Timezone</span>
                            <span class="data-value">Bangladesh (GMT +6)</span>
                        </div>
                        <div class="data-col data-col-end"><a href="#" data-toggle="modal" data-target="#profile-language" class="link link-primary">Change</a></div>
                    </div>

                </div>
            </div>
          </>
       
        )
    }
}





    

export default Personal



