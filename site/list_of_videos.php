<div class="main-content list-of-articles-page" id="mainContent">
  <?php
  require('template-parts/better_in_month.php');
  ?>

  <section class="section container-fluid list-articles has-tabs">
    <?php
    $section_head = [
      'title'       => 'Красота и косметика, спорт и модные показы',
      'bold'        => true,
      'breadcrumbs' => true,
      'caption'     => '256 статей'
    ];
    require('template-parts/section_head.php');
    ?>
    <div class="row">
      <div class="col-lg-12">
        <div class="tabs-nav-container">
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
    </div>
    <?php
    require('template-parts/template_list_video.php');
    ?>
  </section>
  <?php
  require('template-parts/pagination.php');
  ?>
</div>