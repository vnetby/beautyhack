<div class="main-content bookmarks-page" id="mainContent">
  <?php
  require('template-parts/better_in_month.php');
  ?>
  <section class="section container-fluid bookmarks-section">

    <?php
    $section_head = [
      'title'   => 'Закладки',
      'caption' => '25 закладок'
    ];
    require ( 'template-parts/section_head.php' );
    ?>

    <?php
    require('template-parts/template_list_news_5.php');
    ?>
  </section>

  <?php
  require('template-parts/pagination.php');
  ?>
</div>
