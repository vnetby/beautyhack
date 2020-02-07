<div class="main-content list-of-articles-page" id="mainContent">
  <?php
  require('template-parts/better_in_month.php');
  ?>

  <section class="section container-fluid">
    <?php
    $section_head = [
      'title'       => 'Красота и косметика, спорт и модные показы',
      'bold'        => true,
      'breadcrumbs' => true,
      'caption'     => '256 статей'
    ];
    require('template-parts/section_head.php');
    ?>

    <div class="row battle-list">

      <div class="col-12 battle-col ajax-battle-item">
        <h2 class="battle-title card-title fs-xl mb-4">
          <a href="<?= URL; ?>?page=battle">
            Какой оттенок блонда Гвинет Пэлтроу вам нравится больше?
          </a>
        </h2>
        <div class="battle-container js-battle has-preloader" data-ajax="/_request.php?action=vote_battle&id=212">
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
      </div>





      <div class="col-12 battle-col ajax-battle-item">
        <h2 class="battle-title card-title fs-xl mb-4">
          <a href="<?= URL; ?>?page=battle">
            Какой оттенок блонда Гвинет Пэлтроу вам нравится больше?
          </a>
        </h2>
        <div class="battle-container js-battle has-preloader" data-ajax="/_request.php?action=vote_battle&id=232">
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
      </div>





      <div class="col-12 battle-col ajax-battle-item">
        <h2 class="battle-title card-title fs-xl mb-4">
          <a href="<?= URL; ?>?page=battle">
            Какой оттенок блонда Гвинет Пэлтроу вам нравится больше?
          </a>
        </h2>
        <div class="battle-container js-battle has-preloader" data-ajax="/_request.php?action=vote_battle&id=777">
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
      </div>





      <div class="col-12 battle-col ajax-battle-item">
        <h2 class="battle-title card-title fs-xl mb-4">
          <a href="<?= URL; ?>?page=battle">
            Какой оттенок блонда Гвинет Пэлтроу вам нравится больше?
          </a>
        </h2>
        <div class="battle-container js-battle has-preloader" data-ajax="/_request.php?action=vote_battle&id=987">
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
      </div>



    </div>
  </section>
  <?php
  require('template-parts/pagination.php');
  ?>
</div>