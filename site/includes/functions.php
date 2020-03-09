<?php
function get_old_art_content($artUrl)
{
  $artBaseUrl = 'https://new.beautyhack.ru/';
  $content = file_get_contents($artUrl);
  $content = mb_convert_encoding($content, 'HTML-ENTITIES', "UTF-8");
  $dom = new DOMDocument();

  libxml_use_internal_errors(true);

  $dom->loadHTML('<?xml encoding="utf-8" ?>' . $content);

  $images = $dom->getElementsByTagName('img');
  foreach ($images as $img) {
    $img->setAttribute('src', $artBaseUrl . $img->getAttribute('src'));
  }

  $videos = $dom->getElementsByTagName('video');
  foreach ($videos as $video) {
    $video->setAttribute('poster', $artBaseUrl . $video->getAttribute('poster'));
    $sources = $video->getElementsByTagName('source');
    foreach ($sources as $source) {
      $source->setAttribute('src', $artBaseUrl . $source->getAttribute('src'));
    }
  }

  $finder = new DomXPath($dom);
  $classname = "art-body";
  $nodes = $finder->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]");

  $art = $nodes->item(0);

  return $dom->saveHTML($art);
}
