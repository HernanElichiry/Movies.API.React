
import {
     Controller,
     Get,
     HttpStatus,
     Param,  
     ParseIntPipe,  
     Response
   } from '@nestjs/common';
   import { MovieService } from './movies.service';
   //import { iMovie} from './movies.interface';
   import { MovieDto } from './movies.dto';
   

@Controller('movies')
 export class MovieController {
  public constructor(private readonly MovieService: MovieService) {}
  
  @Get()
  getMovies(): MovieDto[] {
    return this.MovieService.getMovies();
  }

  @Get(':id')
  getMovieById(@Param('id') id: string): MovieDto {
    return this.MovieService.getMovieById(id);
  }
 }