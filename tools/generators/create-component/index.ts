import { externalSchematic, Rule } from '@angular-devkit/schematics';
import { Tree, formatFiles, generateFiles, getProjects, names } from '@nrwl/devkit';
import * as path from 'path';
import { componentGenerator } from '@nrwl/angular/generators';

interface Schema {
  componentName: string;
  projectName: string;
}

export default async function (tree: Tree, schema: Schema) {

  const chainItems: Rule[] = [];

  const project = getProjects(tree).get(schema.projectName);
  const targetPath = path.join(project?.sourceRoot as string, 'lib');
  const templatePath = 'tools/generators/ngrx-component-store/templates';
  const storeNames = names(schema.componentName)

  const substitutions =  {
    tmpl: '',
    ...storeNames
  };

  generateFiles(tree, templatePath, targetPath, substitutions);


  chainItems.push(externalSchematic('@nrwl/angular', 'component', {
    name: schema.componentName
  }));

  await formatFiles(tree);
  await componentGenerator(tree, { name: schema.componentName, project: schema.projectName, flat: true })
}
