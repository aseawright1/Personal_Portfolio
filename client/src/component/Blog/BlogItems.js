import React, {Component} from 'react';
class BlogItems extends Component{
    render(){
        let {bTitle, bDetails, gitLink, deployLink, image} = this.props;
        return(
            <div className="col-lg-4 col-sm-6">
                <div className="blog_post">
                    <div className="blog_img">
                        <img className="img-fluid" src={image} alt=""/>
                    </div>
                    <div className="post_content">
                        <div className="blog-meta">
                        </div>
                        <h2>{bTitle}</h2>
                        <p>{bDetails}</p>
                        <a href={gitLink} target="_blank" rel="noopener noreferrer" className="git_btn">GitHub</a>
                        <a href={deployLink} target="_blank" rel="noopener noreferrer" className="deploy_btn">Deployed App</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogItems;