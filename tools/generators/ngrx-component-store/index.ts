import { Tree, formatFiles, installPackagesTask, names, getProjects, generateFiles } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { ComponentStoreSchema } from './component-store-generator.interface';
import * as path from 'path';

export default async function (tree: Tree, schema: ComponentStoreSchema) {
  const project = getProjects(tree).get(schema.projectName);
  const targetPath = path.join(project?.sourceRoot as string, 'lib');
  const templatePath = 'tools/generators/ngrx-component-store/templates';
  const storeNames = names(schema.componentName)

  const substitutions =  {
    tmpl: '',
    ...storeNames
  };

  generateFiles(tree, templatePath, targetPath, substitutions);

  await formatFiles(tree);
}
