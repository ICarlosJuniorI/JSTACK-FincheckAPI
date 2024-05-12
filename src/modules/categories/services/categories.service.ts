import { Injectable } from '@nestjs/common';

import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';
import { CreateCategoryDto } from '../dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  create(userId: string, createCategoryDto: CreateCategoryDto) {
    const { name, icon, type } = createCategoryDto;

    return this.categoriesRepo.create({
      data: {
        userId,
        name,
        icon,
        type,
      },
    });
  }

  // Find the categories by the userId
  findAllByUserId(userId: string) {
    return this.categoriesRepo.findMany({
      where: { userId },
    });
  }

  findOne(categoryId: string) {
    return this.categoriesRepo.findFirst({
      where: { id: categoryId },
    });
  }

  // update(categoryId: string, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${categoryId} category`;
  // }

  remove(userId: string, categoryId: string) {
    return this.categoriesRepo.delete({
      where: {
        userId,
        id: categoryId,
      },
    });
  }
}
