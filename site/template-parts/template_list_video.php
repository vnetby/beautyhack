<?php
// $banners = [
//   ['link' => 'https://google.com', 'img' => URL . '/img/true_banners/banner_320_250.jpg'],
//   ['link' => 'https://google.com', 'img' => URL . '/img/true_banners/banner_300_600.jpg'],
//   ['link' => 'https://google.com', 'img' => URL . '/img/true_banners/banner_320_250.jpg'],
//   ['link' => 'https://google.com', 'img' => URL . '/img/true_banners/banner_550_150.jpg'],
//   ['link' => 'https://google.com', 'img' => URL . '/img/true_banners/banner_300_250.jpg']
// ];

// $banners = json_encode($banners);
?>
<!-- 
if has banners add class "has-banner"
else
add class "no-banner" 
-->
<div class="row list-cards-row art-js-banners has-banner">

  <!-- 
  template_list_news_1
 home main section
-->

  <div class="banner display-mobile col-lg-12 row-banner" data-index="0">
    <div id="adriverBanner">
      <a href='https://google.com' target="_blank">
        <img src='/img/true_banners/banner_320_250.jpg' alt="preview image" />
      </a>
    </div>
    <script>
      // new adriver("adriverBanner", {
      //   sid: 210980,
      //   bt: 52,
      //   bn: 2
      // });
    </script>
  </div>

  <!-- 0 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>





  <!-- 1 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>



  <!-- 2 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>



  <!-- 3 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>




  <div class="art-card-col display-desktop display-tablet vertical-banner" data-index="1">
    <div class="card banner">
      <div class="shadow-both">
        <div id="adriverBanner2">
          <a href="https://google.com" target="_blank" class="thumb mb-0 hover-overlay">
            <img src="/img/true_banners/banner_300_600.jpg" alt="preview image" />
          </a>
        </div>
      </div>
    </div>
    <script>
      // new adriver("adriverBanner2", {
      //   sid: 210980,
      //   bt: 52,
      //   bn: 2
      // });
    </script>
  </div>




  <!-- 4 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>




  <div class="banner display-mobile col-lg-12 row-banner" data-index="2">
    <div id="adriverBanner4">
      <a href="https://google.com" target="_blank">
        <img src="/img/true_banners/banner_320_250.jpg" alt="preview image" />
      </a>
    </div>
    <script>
      // new adriver("adriverBanner4", {
      //   sid: 210980,
      //   bt: 52,
      //   bn: 2
      // });
    </script>
  </div>





  <!-- 5 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>


  <!-- 6 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>


  <!-- 7 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>


  <!-- 8 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>





  <div class="col-lg-12 banner display-desktop display-tablet row-banner" data-index="3">
    <div class="dashed-shadow">
      <span class="shadow"></span>
      <div id="adriverBanner3">
        <a href="https://google.com">
          <img src="/img/true_banners/banner_550_150.jpg" alt="preview image" />
        </a>
      </div>
    </div>
    <script>
      // new adriver("adriverBanner3", {
      //   sid: 210980,
      //   bt: 52,
      //   bn: 2
      // });
    </script>
  </div>



  <!-- 9 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>




  <div class="banner display-mobile col-lg-12 row-banner" data-index="4">
    <div class="dashed-shadow">
      <span class="shadow"></span>
      <div id="adriverBanner3">
        <a href="https://google.com">
          <img src="/img/true_banners/banner_300_250.jpg" alt="preview image" />
        </a>
      </div>
    </div>
    <script>
      // new adriver("adriverBanner3", {
      //   sid: 210980,
      //   bt: 52,
      //   bn: 2
      // });
    </script>
  </div>





  <!-- 10 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>

  <!-- 11 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>


  <!-- 12 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>


  <!-- 13 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>


  <!-- 14 -->
  <div class="art-card-col">
    <div class="card">

      <a href="https://youtu.be/VVwfRAwTUxw" class="thumb hover-overlay" data-fancybox>
        <img class="object-cover" src="<?= URL; ?>img/news-block-home/05.jpg" alt="как я две недели тестировала Achronim">
        <span class="card-date fs-xm">Сегодня в 11:47</span>
        <span class="play-ico white white">
          <?= $svg->get_ico('play'); ?>
        </span>
        <div class="overlay fs-xxm">
          <div class="overlay-content">
          </div>
        </div>
      </a>

      <div class="card-meta">
        <a href="#" class="cat fs-xm">Материнство</a>
        <div class="views">
          <span class="ico eye">
            <?= $svg->get_ico('eye'); ?>
          </span>
          <span class="count fs-s">2k</span>
        </div>
      </div>

      <div class="card-content">
        <a href="https://youtu.be/VVwfRAwTUxw" class="card-title fs-xl" data-fancybox>
          13 фраз, которые нельзя говорить ребенку
        </a>

        <div class="card-author fs-xm">
          <a href="#">Анжелика Баклага</a> • 7 минут чтения
        </div>

      </div>
    </div>

  </div>





</div>