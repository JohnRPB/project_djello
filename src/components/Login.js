import React from 'react';

const Login = () => {
  return (
    <div id="login-overlay" className="modal-dialog">
      <div className="modal-content">
          <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">Djello</h4>
              <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          </div>
          <div className="modal-body">
              <div className="row">
                  <div className="col-md-12">
                      <div className="well">
                          <form id="loginForm" method="POST" action="/login/" noValidate="novalidate">
                              <div className="form-group">
                                  <label htmlFor="username" className="control-label">Username</label>
                                  <input type="text" className="form-control" id="username" name="username" value="" required="" title="Please enter you username" placeholder="example@gmail.com" />
                                  <span className="help-block"></span>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="password" className="control-label">Password</label>
                                  <input type="password" className="form-control" id="password" name="password" value="" required="" title="Please enter your password" />
                                  <span className="help-block"></span>
                              </div>
                              <div id="loginErrorMsg" className="alert alert-error hidden"></div>
                              <div className="checkbox">
                                  <p className="help-block"></p>
                              </div>
                              <button type="submit" className="btn btn-success btn-block">Login</button>
                          </form>
                      </div>
                  </div>
                              </div>
          </div>
      </div>
  </div>
  )
}

export default Login;
