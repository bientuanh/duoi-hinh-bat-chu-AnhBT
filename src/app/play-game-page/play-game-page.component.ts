import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-game-page',
  templateUrl: './play-game-page.component.html',
  styleUrls: ['./play-game-page.component.css']
})
export class PlayGamePageComponent implements OnInit {

  public answer = '';
  public message: string;
  private messageError = 'Bạn đã trả lời sai CMNR ...';
  private messageSuccess = 'Bạn đã trả lời đúng ...';
  private styleError = 'style-message-error';
  private styleSuccess = 'style-message-success';
  public styleMessage: string;
  public isBtnSuccess = false;
  public isBtnFinish = false;

  listImage = [
    '../../assets/images/imagesgame/img-game.jpg',
    '../../assets/images/imagesgame/img-game-1.jpg',
    '../../assets/images/imagesgame/img-game-2.jpg'
  ];

  listAnswer = ['kê đơn', 'kẻ cắp gặp bà già', 'mâm cao cỗ đầy'];

  index = 0;
  srcImage = this.listImage[0];
  answerCorrect = this.listAnswer[0];

  constructor() { }

  ngOnInit() {
  }

  onModalChange() {
    if (this.answer.toLowerCase() === this.answerCorrect) {
      this.message = this.messageSuccess;
      this.styleMessage = this.styleSuccess;
      if (this.index === 2) {
        this.isBtnFinish = true;
        this.isBtnSuccess = false;
      } else {
        this.isBtnSuccess = true;
        this.isBtnFinish = false;
      }
    } else {
      this.message = this.messageError;
      this.styleMessage = this.styleError;
      this.isBtnSuccess = false;
    }
  }

  onClickSuccessBtn() {
    this.index ++;
    this.srcImage = this.listImage[this.index];
    this.answerCorrect = this.listAnswer[this.index];
    this.answer = '';
    this.message = '';
    this.isBtnSuccess = false;
  }

}
