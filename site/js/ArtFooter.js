import { DOM } from './DOM/index.js';



export class ArtFooter extends DOM {


  constructor ( container ) {
    super();
    let wrap = this.getContainer ( container );
    this.footer = this.findFirst('.art-footer', wrap );

    if ( !this.footer ) return;

    this.getElements();

    if ( this.vote ) this.initVote();

    if ( this.commentsBtn && this.commentsContainer ) this.initComments();

  }



  getElements () {
    this.vote = this.findFirst( '.vote-block', this.footer );
    this.commentsBtn = this.findFirst( '.view-comments', this.footer );
    this.commentsContainer = this.findFirst('.comments-container', this.footer);


    if ( this.vote ) {
      this.likeArt    = this.findFirst('.like-vote', this.vote);
      this.dislikeArt = this.findFirst('.dislike-vote', this.vote);
    }

  }



  initVote () {
    this.likeArt.addEventListener('click', e => {
      e.preventDefault();
      this.voteArticle('like');
    });
    this.dislikeArt.addEventListener('click', e => {
      e.preventDefault();
      this.voteArticle('dislike');
    });
  }



  voteArticle ( type ) {
    this.addPreloader ( this.vote );
    this.sendVoteRequest( type )
    .then ( res => {
      console.log( res );
      this.removePreloader ( this.vote );
    });
  }


  sendVoteRequest ( type ) {
    let url = this.vote.dataset.ajax;
    let http = new XMLHttpRequest;
    http.open('POST', url);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.send(`type=${type}`);
    return new Promise( ( resolve, reject ) => {
      http.onreadystatechange = () => {
        if ( http.readyState === 4 && http.status === 200 ) {
          resolve ( http.responseText );
        }
      }
    });
  }



  initComments () {
    this.commentsBtn.addEventListener( 'click', e => {
      e.preventDefault();
      if ( !this.visibleComments ) {
        $(this.commentsContainer).slideDown({
          duration: 300
        });
        this.visibleComments = true;
      } else {
        $(this.commentsContainer).slideUp({
          duration: 300
        });
        this.visibleComments = false;
      }
    })
  }
}
