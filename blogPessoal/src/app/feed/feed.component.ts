import { Postagem } from './../model/Postagem';
import { Component, OnInit } from '@angular/core';
import { PostagemService } from './../service/postagem.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

listaPostagens: Postagem []

  constructor(private postagemService: PostagemService) { }

  ngOnInit(){

    this.findallPostagens()

  }

  findallPostagens () {

    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{

      this.listaPostagens = resp

    })

  }

}
