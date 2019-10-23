<div class="authors-page main-content" id="mainContent">
  <?php

  require('template-parts/better_in_month.php');

  ?>

  <section class="section container-fluid list-authors has-tabs">

    <?php
    $section_head = [
      'title'   => 'Авторы',
      'bold'    => true,
      'caption' => '64 автора',
    ];
    require ( 'template-parts/section_head.php' );
    ?>


    <div class="tabs-nav-container row">
      <div class="col-lg-12">
        <ul class="tabs-nav">
          <li class="tabs-nav-item active">
            <a href="#" class="tabs-nav-link">Новые</a>
          </li>
          <li class="tabs-nav-item">
            <a href="#" class="tabs-nav-link">Популярные</a>
          </li>
        </ul>
      </div>
    </div>

    <?php
    require('template-parts/template_list_news_3.php');
    ?>

  </section>

  <?php

  require('template-parts/pagination.php');

  ?>
</div>
