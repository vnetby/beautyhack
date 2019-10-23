<div class="main-content quiz-page" id="mainContent">

  <?php
  require('template-parts/better_in_month.php');
  ?>

  <section class="section container-fluid article col-mb mb-8">

    <?php
    $section_head = [
      'title'   => 'Викторина: угадай настоящий цвет волос звезды',
      'publish' => 'Сегодня в 11:47 • 7 минут чтения',
      'tags'    => ['Викторина', 'Красота']
    ];
    require ( 'template-parts/section_head.php' );
    ?>



    <div id="jsQuiz" class="has-preloader" data-ajax="/_request.php?action=js_quiz" data-quiz="quizId">

      <div class="row clearfix center-row">
        <div class="col-lg-12">
          <p>
            Недовольны состоянием кожи и волос? Возможно, дело в банальном дефиците витаминов. Пройдите наш тест и узнайте, каких полезных веществ не хватает вашему организму.
          </p>
        </div>
      </div>

      <div class="has-test">

        <div class="row test-row">
          <div class="count-quest-wrap mb-0">
            <div class="count-quest like-btn" id="countQuestWrap">
              <span id="countQuest">10 вопросов</span>
            </div>
          </div>
          <div class="col-lg-2 mb-0"></div>
          <div class="col-lg-8 mb-0 ">
            <div class="test-img md-full-content">
              <img src="<?= URL; ?>/img/quiz/01.jpg" alt="test">
            </div>
          </div>
          <div class="col-lg-2 mb-0"></div>
        </div>


        <div class="row quest-row hidden has-preloader" id="questContainer">
          <div class="col-lg-3 col-sm-1 mb-0"></div>
          <div class="col-lg-6 col-sm-10 mb-0 quest-container">
            <h3 class="art-title-lg question-title" id="questTitle"></h3>
            <div class="form-container" id="questFormContainer">

            </div>
          </div>
          <div class="col-lg-3 col-sm-1 mb-0"></div>
        </div>

        <div class="row controls-row">
          <div class="col-lg-12 mb-0">
            <div class="btn-row center">
              <button type="button" class="btn red begin-test-btn" id="beginTestBtn">Участвовать в викторине</button>
            </div>
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
