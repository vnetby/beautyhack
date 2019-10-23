<div class="row head-row">
  <div class="col-lg-2"></div>
  <div class="col-lg-8 head-col">
    <?php
    if ( isset ( $section_head['title'] ) ) {
      ?>
      <h2 class="section-title <?= isset ( $section_head['bold'] ) ? 'bold fs-xlg' : 'fs-lg'; ?>">
        <?= $section_head['title']; ?>
      </h2>
      <?php
    }


    if ( isset ( $section_head['breadcrumbs'] ) ) {
      require( 'breadcrumbs.php');
    }


    if ( isset ( $section_head['caption'] ) ) {
      ?>
      <div class="title-caption">
        <?= $section_head['caption']; ?>
      </div>
      <?php
    }

    if ( isset( $section_head['author'] ) ) {
      ?>
      <div class="author-col">
        <div class="avatar">
          <img src="<?= URL; ?>img/authors/01.jpg" alt="avatar">
        </div>
        <div class="author-name fs-xxl">
          <?= $section_head['author']; ?>
        </div>
      </div>
      <?php
    }

    if ( isset ( $section_head['publish'] ) ) {
      ?>
      <div class="art-publish">
        <?= $section_head['publish']; ?>
      </div>
      <?php
    }

    if ( isset ( $section_head['tags'] ) ) {
      ?>
      <div class="tags-col">
        <?php
        foreach ( $section_head['tags'] as $tag ) {
          ?>
          <a href="#" class="tag-link"><?= $tag; ?></a>
          <?php
        }
        ?>
      </div>
      <?php
    }
    ?>
  </div>
  <div class="col-lg-2"></div>
</div>
