import React from 'react';

class Editor extends React.Component {

    render(){
        return (
            <div class="ticket-msg-reply">
            <h5 class="title">Reply</h5>
            <form action="#" class="form-reply">
                <div class="form-group">
                    <div class="form-editor-custom">
                        <textarea class="form-control" placeholder="Write a message..."></textarea>
                        <div class="form-editor-action">
                            <ul class="form-editor-btn-group">
                                <li class="form-btn-more"><a href="#" data-toggle="tooltip" title="Add File" class="btn btn-icon"><em class="icon ni ni-clip-h"></em></a></li>
                                <li class="form-btn-more"><a href="#" data-toggle="tooltip" title="Add Image" class="btn btn-icon"><em class="icon ni ni-img"></em></a></li>
                                <li class="form-btn-more"><a href="#" data-toggle="tooltip" title="Add Link" class="btn btn-icon"><em class="icon ni ni-link"></em></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="form-action">
                    <ul class="form-btn-group">
                        <li class="form-btn-primary"><a href="#" class="btn btn-primary">Send</a></li>
                        <li class="form-btn-secondary"><a href="#" class="btn btn-dim btn-outline-light">Mark as close</a></li>
                    </ul>
                </div>
            </form>
        </div>
        )
    }
}
    

export default Editor


