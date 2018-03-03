Vue.component('course', {
	'template': `<div class="col-lg-4">
          <div class="card">
            <img class="card-img-top" src="https://i.ytimg.com/vi/b91YLjLNAbw/sddefault.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fab fa-youtube youtube-color"></i>
                إحصائيات اليوتيوب
              </li>
              <li class="list-group-item">
                <ul class="course-statistics">
                  <li><i class="fas fa-bars"></i> 66 درس</li>
                  <li><i class="far fa-clock"></i> 03:00:00</li>
                  <li><i class="far fa-play-circle"></i> 16,000 مشاهدة</li>
                  <li><i class="far fa-thumbs-up"></i> 650 إعجاب</li>
                  <li><i class="far fa-comments"></i> 96 تعليق</li>
                </ul>
              </li>
            </ul>
            <div class="card-body">
              <button class="btn btn-secondary btn-block">شاهد الآن</button>
            </div>
          </div>
        </div>`
});

new Vue({
	'el': '#courses-app',
	'template': `<div class="row"> 
			<course></course> 
		</div>`
});