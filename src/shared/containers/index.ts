import { IRepository } from '@modules/url/domain/repositories/IRepository';
import { Repository } from '@modules/url/infra/repositories/Repository';
import { container } from 'tsyringe';

container.registerSingleton<IRepository>('Repository', Repository);
