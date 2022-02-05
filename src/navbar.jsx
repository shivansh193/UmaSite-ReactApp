import React from "react"
function Navbar(){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a class="navbar-brand" href="#">UMA LSP Interface</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Links</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" >Get Help</a>
        </li>
      </ul>
      <form class="d-flex">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Choose Network
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Mumbai</a></li>
            <li><a class="dropdown-item" href="#">California</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">London</a></li>
            
          </ul>
        </li>
      </form>
    </div>
  </div>
</nav> 
)
};
export default Navbar;
// const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
//     return (
//       <div className="dropdown" onClick={this.toggleOpen}>
//         <button
//           className="btn btn-secondary dropdown-toggle"
//           type="button"
//           id="dropdownMenuButton"
//           data-toggle="dropdown"
//           aria-haspopup="true"
//         >
//           Dropdown
//         </button>
//         <div className={menuClass} aria-labelledby="dropdownMenuButton">
//           <a className="dropdown-item" href="#nogo">
//             Item 1
//           </a>
//           <a className="dropdown-item" href="#nogo">
//             Item 2
//           </a>
//           <a className="dropdown-item" href="#nogo">
//             Item 3
//           </a>
//         </div>
//       </div>
//     );
//   }
// }