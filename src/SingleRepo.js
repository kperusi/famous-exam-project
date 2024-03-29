import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import logo from './timer.svg'
import logo2 from './link.svg'
import './singleRepoStyle.css'
// import Seo from "./Seo";



export default function SingleRepo() {
  const params = useParams();
  const navigate = useNavigate()

  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, SetError] = useState("");

  useEffect(() => {
    let url = "https://api.github.com/users/kperusi/repos";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        SetError("Something went wrong");
      })
      .finally(() => {
        SetLoading(false);
      });
  }, []);
console.log(data)
  const listName = data.map((each) => {
    if (each.name === params.name) {
      return (
        
        <div className="single-repo-container" key={each.id}>
           {/* <Seo
      title ={params.name}
      description='Sunday Famous portfolio. I am a Software Engineer. Some of my web designs are shown here'
       type= 'website'
       name='Sunday Famous'/> */}
       
          {each.id}
          <div className="single-repo-owner">
          <h1>{each.owner.login}</h1>
          <h3>{each.owner.id}</h3>
          
          </div>
          
          <div className="single-repo-wrap">
            <div className="image-wrap">
              <div className="image"></div>
              {each.description && <p className="single-repo-desc">{each.description}</p>}
              
            </div>
            <div className="single-details-wrap">
              <div className="single-repo-name">{each.name}</div>
              <div className="single-branch-wrap">
                <div className="single-repo-visibility">{each.visibility}</div>
                <div className="single-repo-branch">
                  {each.default_branch} branch
                </div>
                <div className="single-repo-id">{each.id}</div>
              </div>
              <div className="single-other-details">
                <div className="single-date-update">
                  {/* <h4>Updated time</h4> */}
                 <div className="para-wrap"><img src={logo} alt="time" className="time-icon"/>
                 <p> {each.updated_at}</p></div> 
                 {/* <h4>Repo Url</h4> */}
                 <div className="para-wrap-deploy"><img src={logo2} alt="time" className="time-icon"/>
                 <p style={{marginTop:'4px'}}> {each.url}</p></div>
                 {/* <h4>Created time</h4>  */}
                 <div className="para-wrap"><img src={logo} alt="time" className="time-icon"/>
                 <p> {each.created_at}</p></div> 
                 {/* <h4>Deployment Url</h4> */}
                 <div className="para-wrap-deploy"><img src={logo2} alt="time"    className="time-icon"/>
                 <p style={{marginTop:'4px'}}>{each.deployments_url}</p></div> 
                  <p></p>
                  
                </div>
              </div>
              
              
              

            </div>
          </div>
          <div className="single-repo-btns-wrap">
              <button className="single-repo-btn-repo" onClick={()=>{navigate('/repos')}}>Repository</button>
              <button onClick={()=>{navigate('/')}}>Home</button>
              </div>
        </div>
      );
    }
  });
  if (loading) {
    return (
      <div>
        <h1 className="loading">Loading:Please wait</h1>
        <div className="loader"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="repolist-error">
      <h1>{error}</h1>
      <button onClick={()=>{window.location.reload()}}>Reload</button>
    </div>
    );
  }

  return <div>{listName}</div>;
}
