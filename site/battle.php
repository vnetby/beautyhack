<div class="main-content battle-page" id="mainContent">


  <?php
  require('template-parts/better_in_month.php');
  ?>



  <section class="section container-fluid article col-mb mb-8">

    <?php
    $section_head = [
      'title'   => 'Бьюти-битва',
      'publish' => 'Сегодня в 11:47 • 7 минут чтения',
      'tags'    => ['Красота', 'Стиль Жизни']
    ];
    require ( 'template-parts/section_head.php' );
    ?>

    <div class="row clearfix p-left">
      <div class="col-lg-12">
        <div class="shadow-both right image sm-full-content">
          <div class="ajax-image" data-lg="<?= URL; ?>img/banners/adv_1.jpg"  data-sm="<?= URL; ?>img/banners/adv_1-sm.jpg" data-alt="как я две недели тестировала Achronim"></div>
        </div>
        <h3 class="art-title-lg">Какой оттенок блонда Гвинет Пэлтроу вам нравится больше?</h3>
        <p>
          В мировом океане 5,25 триллиона пластиковых предметов, из которых 269 тысяч тонн пластика плавает на поверхности и образует мусорные острова, а 100 тысяч морских животных умирают от него каждый год.
        </p>
      </div>
    </div>




    <div class="battle-container js-battle has-preloader" data-ajax="/_request.php?action=vote_battle">
      <div class="row battle-row">
        <div class="vs-wrap">
          <span class="vs">VS</span>
        </div>
        <div class="col-6 battle-img">
          <a href="#" class="battle-link" id="firstCompVote">
            <img src="<?= URL; ?>/img/battle/01.jpg" alt="battle">
          </a>
        </div>
        <div class="col-6 battle-img">
          <a href="#" class="battle-link" id="secondCompVote">
            <img src="<?= URL; ?>/img/battle/02.jpg" alt="battle">
          </a>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 mb-0">
          <div class="battle-progress-container" id="battleProgressContainer">
          </div>
          <div class="btn-row center">
            <button type="button" class="btn red vote-battle-btn" id="voteBattleBtn">Проголосовать</button>
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
