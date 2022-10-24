import { Test, TestingModule } from '@nestjs/testing';
import { GetNoteService } from './get-note.service';

describe('GetNoteService', () => {
  let service: GetNoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetNoteService],
    }).compile();

    service = module.get<GetNoteService>(GetNoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
