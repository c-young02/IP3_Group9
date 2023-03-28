import MeteorList from './MeteorsList';
import MeteorDate from './MeteorDate';


function MeteorsComp() {
  

  return(
    <div className="container" style={{ margin: "2em"}}>
      <h1 className="text-center">Meteor Information</h1>
      <div className="row pt-3">
        <div class="col-sm btn-group" role="group">
            <button class="btn btn-secondary">
              List View
            </button>
            <button class="btn btn-secondary">
              Graph View
            </button>
        </div>
        <div class="col-sm text-center">
          <MeteorDate />
        </div>
        <div class="col-sm">
          <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

          </div>
        </div>
      </div>

      <div className="meteorsList">
			  <MeteorList />
		  </div>

    </div>        
  )
}

export default MeteorsComp;