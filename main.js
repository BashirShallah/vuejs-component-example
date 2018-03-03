Vue.component('course', {
	'props': {
		'course': {type: Object, required: true}
	},
	'template': `<div class="col-lg-4">
          <div class="card">
            <img class="card-img-top" :src="course.thumbnails" :alt="course.name">
            <div class="card-body">
              <h5 class="card-title">{{course.name}}</h5>
              <p class="card-text">{{course.description}}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fab fa-youtube youtube-color"></i>
                إحصائيات اليوتيوب
              </li>
              <li class="list-group-item">
                <ul class="course-statistics">
                  <li><i class="fas fa-bars"></i> {{course.statistics.lessons}} درس</li>
                  <li><i class="far fa-clock"></i> {{course.statistics.duration}}</li>
                  <li><i class="far fa-play-circle"></i> {{course.statistics.viewCount}} مشاهدة</li>
                  <li><i class="far fa-thumbs-up"></i> {{course.statistics.likeCount}} إعجاب</li>
                  <li><i class="far fa-comments"></i> {{course.statistics.commentCount}} تعليق</li>
                </ul>
              </li>
            </ul>
            <div class="card-body">
              <a target="_blank" :href="course.url" class="btn btn-secondary btn-block">شاهد الآن</a>
            </div>
          </div>
        </div>`
});

new Vue({
	'el': '#courses-app',
	'data': {
		'firstCourse': {
	        "id": "PL1FWK-sgJ9ek59ylOuaS8Ggjz9oBVM8Hb",
	        "name": "VueJS \u0625\u0633\u0623\u0644\u0646\u064a \u0639\u0646",
	        "url": "https:\/\/www.youtube.com\/watch?v=TQQVt3CbSCw&list=PL1FWK-sgJ9ek59ylOuaS8Ggjz9oBVM8Hb",
	        "description": "",
	        "thumbnails": "https:\/\/i.ytimg.com\/vi\/TQQVt3CbSCw\/sddefault.jpg",
	        "statistics": {
	            "viewCount": 111,
	            "likeCount": 11,
	            "commentCount": 7,
	            "duration": "00:04:18",
	            "lessons": 2
	        }
	    }
	},
	'template': `<div class="row"> 
			<course :course="firstCourse"></course> 
		</div>`
});