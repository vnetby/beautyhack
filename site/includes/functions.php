<?php

function get_old_art_content($artUrl)
{
  $artBaseUrl = 'https://new.beautyhack.ru/';

  $content = file_get_contents($artUrl);

  $dom = new DOMDocument();

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


  $articles = $dom->getElementsByTagName('article');

  $art = $articles->item(0);

  $artHTML =  $dom->saveHTML($art);

  return $artHTML;
}
