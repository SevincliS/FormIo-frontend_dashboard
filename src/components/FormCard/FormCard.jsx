import React from 'react';


const UserForm = [
    {
        "formName" : "Hoops",
        "newForms" : "10",
        "lastForms" : "255",
        "totalForms" : "265",
    },
    {
        "formName" : "Possible",
        "newForms" : "10",
        "lastForms" : "255",
        "totalForms" : "265",
    },
    {
        "formName" : "Menatek",
        "newForms" : "10",
        "lastForms" : "255",
        "totalForms" : "265",
    },
]

class FormCard extends React.Component {
    render(){
        return(
            UserForm.map((FormElement) => {
                return (
                <div class="col-sm-6 col-xl-4">
                    <div class="card card-bordered">
                        <div class="card-inner">
                            <div class="team"> 
                                <div class="team-options">
                                </div>
                                <div class="user-card user-card-s2">
                                    <div class="user-info">
                                        <h6>{FormElement.formName}</h6>
                                    </div>
                                </div>
                                
                                <ul class="team-statistics">
                                    <li>
                                        <span>{FormElement.newForms}</span>
                                        <span>New Forms</span>
                                    </li>
                                    <li>
                                        <span>{FormElement.lastForms}</span>
                                        <span>Last Forms</span>
                                    </li>
                                    <li>
                                        <span>{FormElement.totalForms}</span>
                                        <span>Total Forms</span>
                                    </li>
                                </ul>
                                <div class="team-view">
                                    <a href="html/user-details-regular.html" class="btn btn-round btn-outline-light w-150px">
                                        <span>View Forms</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                )
            })
       
        )
    }
}





    

export default FormCard



