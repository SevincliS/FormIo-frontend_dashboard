import React from 'react';


const TeamMember = [
    {
        "id":"JF",
        "name": "Joseph Figueroa",
        "mail" : "joseffig@gmail.com",
        "permission" : "Member",
    },
    {
        "id":"SB",
        "name": "Stephen Barber",
        "mail" : "stephenbarber@gmail.com",
        "permission" : "Member",
    },
    {
        "id":"HP",
        "name": "Heriberto Patterson",
        "mail" : "heribertopetterson@gmail.com",
        "permission" : "Member",
    },
    {
        "id":"AB",
        "name": "Arturo Blain",
        "mail" : "arturoblain@gmail.com",
        "permission" : "Member",
    },
    {
        "id":"JF",
        "name": "Joseph Figueroa",
        "mail" : "joseffig@gmail.com",
        "permission" : "Admin",
    },
    {
        "id":"SB",
        "name": "Stephen Barber",
        "mail" : "stephenbarber@gmail.com",
        "permission" : "Member",
    },
    {
        "id":"HP",
        "name": "Heriberto Patterson",
        "mail" : "stephenbarber@gmail.com",
        "permission" : "Manager",
    },
    {
        "id":"SB",
        "name": "Arturo Blain",
        "mail" : "arturoblain@gmail.com",
        "permission" : "Member",
    },
    
]


const TeamMemberRow = TeamMember.map((Member) => {
    return (
        <tr class="tb-member-item">
        <td class="tb-member-info">
            <div class="user-card">
                <div class="user-avatar bg-success">
                    <span>{Member.id}</span>
                </div>
                <div class="user-info">
                    <span class="lead-text">{Member.name}</span>
                    <span class="sub-text">{Member.mail}</span>
                </div>
            </div>
        </td>
        <td class="tb-member-type tb-col-sm">
            <span>{Member.permission}</span>
        </td>
        <td class="tb-member-role tb-col-md">
            <div class="form">
                <select class="form-select" data-search="off" data-ui="clean">
                    <option value="superadmin">Super Admin</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                </select>
            </div>
        </td>
        <td class="tb-member-action">
            <div class="d-none d-md-inline">
                <a href="#" class="link link-sm"><span>Edit</span></a>
                <a href="#" class="link link-sm link-danger"><span>Remove</span></a>
            </div>
            <div class="dropdown d-md-none">
                <a class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-v"></em></a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                    <ul class="link-list-plain no-bdr">
                        <li class="active"><a class="link link-sm" href="#">Edit</a></li>
                        <li><a class="link link-sm link-danger" href="#">Remove</a></li>
                    </ul>
                </div>
            </div>
        </td>
    </tr>
    )
})


class TeamTable extends React.Component {

    render(){
        return (
                <table class="table table-tranx">
                     <thead class="tb-member-head thead-light">
                            <tr class="tb-member-item">
                                <th class="tb-member-info">
                                    <span class="overline-title">Team Member</span>
                                </th>
                                <th class="tb-member-type tb-col-sm">
                                    <span class="overline-title">Permission</span>
                                </th>
                                <th class="tb-member-role tb-col-md">
                                    <span class="overline-title">Role</span>
                                </th>
                                <th class="tb-member-action">
                                    <span class="overline-title">Action</span>
                                </th>                     
                            </tr>
                        </thead>
                    <tbody>
                        {TeamMemberRow}
                    </tbody>
                </table>
        )
    }
}
    

export default TeamTable



