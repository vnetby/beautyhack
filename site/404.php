<div class="not-found-page main-content" id="mainContent">

  <?php
  require('template-parts/better_in_month.php');
  ?>
  <section class="section container-fluid not-found-section">

    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <h2 class="section-title">
          Упс!
        </h2>
        <h4 class="section-sub-title fs-xm">
          <span>Мы не смогли найти страницу, которую вы искали... </span><span>Кажется, все редакторы ушли на модный показ...</span>
        </h4>
      </div>
      <div class="col-md-2"></div>
    </div>


    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 error-block">
        <h3 class="title fs-xlg">Ой... Ошибочка</h3>
        <div class="icons-container">
          <img src="<?= URL; ?>img/icons/smile_1.png" alt="smile">
          <img src="<?= URL; ?>img/icons/smile_2.png" alt="smile">
          <img src="<?= URL; ?>img/icons/smile_cry.png" alt="smile">
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>

  </section>

  <?php
  require('template-parts/may_be_interesting.php');
  ?>

  <section class="container-fluid section home-page-btn">
    <div class="row">
      <div class="col-md-12">
        <a href="/" class="btn black">Вернуться на главную</a>
      </div>
    </div>
  </section>

</div>
