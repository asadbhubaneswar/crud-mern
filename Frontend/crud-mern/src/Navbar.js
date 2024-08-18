import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to={'/'} class="navbar-brand" href="#">Employee Management</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to={'/'} class="nav-link" >Employee List</Link>
      </li>
      <li class="nav-item active">
        <Link to={'/add'} class="nav-link" >Add Employee</Link>
      </li>
     
    </ul>
  </div>
</nav>
        </>
    )
}