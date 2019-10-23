<div class="main-content instagram-page" id="mainContent">
  <section class="section container-fluid list-instagram">
    <?php
    $section_head = [
      'title'       => 'Instagram',
      'bold'        => true,
      'breadcrumbs' => true,
      'caption'     => '256 статей'
    ];
    require ( 'template-parts/section_head.php' );
    ?>

    <?php
    require('template-parts/template_list_news_4.php');
    ?>

  </section>

  <?php
  require('template-parts/pagination.php');
  ?>
</div>
