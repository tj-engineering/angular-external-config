import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from '../config.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public description: string = "Empty";

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.loadConfig().subscribe((data: Config) => {
      this.description = data.description;
    })
  }

}
