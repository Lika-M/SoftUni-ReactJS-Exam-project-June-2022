import './Details.css'
export default function Details() {


    return (
        <div id="card-details">
        <article class="blog-card">
          <div class="blog-card-background">
            <div class="card-background-wrapper">
              <img
                src="https://www.gardenia.net/storage/app/public/uploads/images/detail/6O23llKUKW1fPitljenS4fJqSTrNaKa5E84CmnyB.webp"
                alt="plant-picture" />
            </div>
          </div>
    
          <div class="blog-card-info">
            <h4>Jasmine flowers</h4>
            <h6 class="latin">Philadelphus coronarius</h6>
    
            <div class="blog-card-info-text">
              <div class="left">
                <p class="type"><span>Plant Type:</span> Climbers, Shrubs </p>
                <p class="exposure"><span>Exposure:</span> Full Sun </p>
                <p class="water"><span>Water Needs:</span> Low</p>
                <p class="soil"><span>Soil Type:</span> Loam, Sand </p>
              </div>
              <div class="right">
                <p class="description"><span>Description: </span> Philadelphus is a dense, rounded, suckering, deciduous shrub with stiff, straight, ascending branches. In late spring to early summer, its pleasantly arching branches bear abundant clusters of very fragrant, cup-shaped, white flowers. 
                </p>
              </div>
            </div>
    
    
            <a href="#" class="btn btn-with-icon"><i class="fa-solid fa-angle-right"></i><span>EDIT</span></a>
            <a href="#" class="btn btn-with-icon"><i class="fa-solid fa-angle-right"></i><span>DELETE</span></a>
            <a href="#" class="btn btn-with-icon vote"><i class="fa-solid fa-angle-right"></i><span>VOTE</span></a>
          </div>
    
        </article>
      </div>
    );
}