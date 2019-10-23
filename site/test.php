<div class="main-content test-page" id="mainContent">

  <?php
  require('template-parts/better_in_month.php');
  ?>

  <section class="section container-fluid article col-mb mb-8">

    <?php
    $section_head = [
      'title'   => 'Тест : каких витаминов не хватает вашей коже и волосам',
      'publish' => 'Сегодня в 11:47 • 7 минут чтения',
      'tags'    => ['Красота', 'Стиль Жизни']
    ];
    require ( 'template-parts/section_head.php' );
    ?>

    <div class="has-test has-preloader" id="jsTest" data-test="idOfTest" data-ajax="/_request.php?action=begin_test">

      <div class="row clearfix center-row">

        <div class="col-lg-12 banner sm-mobile">
          <a href="#" class="dashed-shadow sm-large-content">
            <span class="shadow"></span>
            <div class="ajax-image" data-lg="<?= URL; ?>img/banners/adv_3.jpg" data-sm="<?= URL; ?>img/banners/adv_3-sm.jpg" data-alt="как я две недели тестировала Achronim"></div>
          </a>
        </div>

        <div class="col-lg-12">
          <p>
            Прежде всего, знаменитость отметила, что уже в старших классах школы хотела быть самой красивой и даже делала себе макияж. Правда, учителя ее стремления к совершенству не поддерживали и заставляли смывать косметику. «Только моя бабушка считала, что я все делала правильно», - поделилась воспоминаниями Моника.
          </p>
        </div>

        <div class="col-lg-12 sm-mobile">
          <div class="card sm-full-content banner ">
            <a href="#" class="thumb hover-overlay">
              <div class="ajax-image" data-lg="<?= URL; ?>img/banners/adv_1.jpg" data-sm="<?= URL; ?>img/banners/adv_1-sm.jpg" data-alt="как я две недели тестировала Achronim"></div>
            </a>
          </div>
        </div>

      </div>

      <div class="row test-row center-row">
        <div class="count-quest-wrap mb-0">
          <span class="count-quest like-btn" id="countQuestions">10 вопросов</span>
        </div>
        <div class="col-lg-12 mb-0">
          <div class="test-img md-full-content">
            <img src="<?= URL; ?>/img/test/01.jpg" alt="test">
          </div>
        </div>
      </div>

      <div class="row quest-row hidden" id="questContainer">
        <div class="col-lg-3 col-sm-1 mb-0"></div>
        <div class="col-lg-6 col-sm-10 mb-0 quest-container">
          <h3 class="art-title-lg question-title" id="questionTitle"></h3>
          <div class="form-container" id="questFormContainer">

          </div>
        </div>
        <div class="col-lg-3 col-sm-1 mb-0"></div>
      </div>

      <div class="row controls-row">
        <div class="col-lg-12 mb-0">
          <div class="btn-row center" id="controlsContainer">
            <button type="button" class="btn red begin-test-btn" id="beginTestBtn">Начать тест</button>
          </div>
        </div>
      </div>

    </div>

    <?php
    require ('template-parts/art_footer.php');
    ?>

  </section>


  <?php
  require('template-parts/read_also.php');
  ?>

</div>
