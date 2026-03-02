import {StudyDto} from './study.dto';
import {Study} from './study.model';

export function mapStudiesDtoToStudiesModel(
  dto: StudyDto[]
): Study[] {


  return dto.map((studyDto, index) => new Study(
    studyDto.id,
    index % 6,
    studyDto.author_of_the_article,
    studyDto.created_year,
    studyDto.title,
    studyDto.original_title,
    studyDto.description,
    studyDto.url
  ))
}
