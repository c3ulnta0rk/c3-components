import fs from "fs";
import path from "path";
import ts from "typescript";
import { execSync } from "child_process";

// Fonction utilitaire pour exécuter une commande et gérer les erreurs
function runCommand(command: string) {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(
      `Erreur lors de l'exécution de la commande: ${command}`,
      error,
    );
    process.exit(1);
  }
}

// Fonction pour analyser le code TypeScript et obtenir l'AST
function parseSourceFile(filePath: string): ts.SourceFile {
  console.log(filePath);
  const program = ts.createProgram([filePath], {
    target: ts.ScriptTarget.ES2020, //ou la version cible de votre projet
    module: ts.ModuleKind.CommonJS, //ou le type de module
  });
  const sourceFile = program.getSourceFile(filePath);
  if (!sourceFile) {
    throw new Error(`Impossible de lire le fichier: ${filePath}`);
  }
  return sourceFile;
}

// Fonction pour ajouter un import (en gérant les doublons)
function addImport(
  sourceFile: ts.SourceFile,
  importName: string,
  importPath: string,
): ts.SourceFile {
  const factory = ts.factory;
  const existingImport = sourceFile.statements.find(
    (statement): statement is ts.ImportDeclaration =>
      ts.isImportDeclaration(statement) &&
      (statement.moduleSpecifier as ts.StringLiteral).text === importPath,
  );

  if (existingImport) {
    const hasNamedImport =
      existingImport.importClause?.namedBindings &&
      ts.isNamedImports(existingImport.importClause.namedBindings) &&
      existingImport.importClause.namedBindings.elements.some(
        (element) => element.name.text === importName,
      );

    if (hasNamedImport) {
      return sourceFile; // L'import existe déjà
    } else {
      // Ajouter le nom à un import groupé existant.  Très complexe à implémenter de manière robuste!
      // On ne le fait pas ici pour simplifier.
      console.warn(
        `L'import de '${importPath}' existe déjà.  L'import de '${importName}' n'a pas été ajouté car il faudrait modifier l'import existant.  Vous devrez l'ajouter manuellement si besoin.`,
      );
      return sourceFile;
    }
  }

  //Créer le nouveau noeud d'import
  const newImport = factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([
        factory.createImportSpecifier(
          false,
          undefined,
          factory.createIdentifier(importName),
        ),
      ]),
    ),
    factory.createStringLiteral(importPath),
  );

  // Ajouter l'import au début du fichier
  return factory.updateSourceFile(sourceFile, [
    newImport,
    ...sourceFile.statements,
  ]);
}

// Fonction principale
function createPage(pageName: string) {
  if (!pageName) {
    console.error("Usage: ts-node createPage.ts <page_name>");
    process.exit(1);
  }

  const projectRoot = path.resolve(__dirname, "..");
  const pageDir = path.join(
    projectRoot,
    "projects",
    "c3-components-docs",
    "src",
    "app",
    "pages",
    "docs",
    "pages",
    pageName,
  );
  const componentPageDir = path.join(pageDir, "pages");
  const routingFilePath = path.join(pageDir, `${pageName}-routing.module.ts`);

  const projectName = "c3-components-docs";

  // 1. Créer les fichiers avec Angular CLI
  runCommand(
    `npx @angular/cli generate module pages/docs/pages/${pageName} --routing --project=${projectName}`,
  );
  runCommand(
    `npx @angular/cli generate component pages/docs/pages/${pageName}/pages/api --module=pages/docs/pages/${pageName}/${pageName}.module.ts --skip-selector --project=${projectName}`,
  );
  runCommand(
    `npx @angular/cli generate component pages/docs/pages/${pageName}/pages/examples --module=pages/docs/pages/${pageName}/${pageName}.module.ts --skip-selector --project=${projectName}`,
  );

  // 2. Modifier le fichier de routing
  let sourceFile = parseSourceFile(routingFilePath);

  const componentNavPath =
    "projects/c3-components-docs/src/app/components/component-nav/component-nav.component";

  // 3. Ajouter les imports
  sourceFile = addImport(
    sourceFile,
    "ApiComponent",
    `./pages/api/api.component`,
  );
  sourceFile = addImport(
    sourceFile,
    "ExamplesComponent",
    `./pages/examples/examples.component`,
  );
  sourceFile = addImport(sourceFile, "ComponentNavComponent", componentNavPath);

  // 4. Trouver et modifier le tableau 'routes' (version simplifiée, mais plus robuste)
  sourceFile = ts.transform(sourceFile, [
    (context: ts.TransformationContext) => (rootNode: ts.SourceFile) => {
      const factory = context.factory;

      function visit(node: ts.Node): ts.Node {
        if (ts.isVariableStatement(node)) {
          const declaration = node.declarationList.declarations[0];
          // Vérifications ROBUSTES (comme avant, mais vérifiez bien)
          if (
            declaration &&
            ts.isVariableDeclaration(declaration) &&
            declaration.name &&
            ts.isIdentifier(declaration.name) &&
            declaration.name.text === "routes"
          ) {
            // Créer le nouveau tableau de routes (votre code existant)
            const newRoutes = factory.createVariableStatement(
              node.modifiers,
              factory.createVariableDeclarationList(
                [
                  factory.createVariableDeclaration(
                    factory.createIdentifier("routes"),
                    undefined,
                    factory.createTypeReferenceNode(
                      factory.createIdentifier("Routes"),
                      undefined,
                    ),
                    factory.createArrayLiteralExpression(
                      [
                        factory.createObjectLiteralExpression(
                          [
                            factory.createPropertyAssignment(
                              factory.createIdentifier("path"),
                              factory.createStringLiteral(""),
                            ),
                            factory.createPropertyAssignment(
                              factory.createIdentifier("component"),
                              factory.createIdentifier("ComponentNavComponent"),
                            ),
                            factory.createPropertyAssignment(
                              factory.createIdentifier("children"),
                              factory.createArrayLiteralExpression(
                                [
                                  factory.createObjectLiteralExpression(
                                    [
                                      factory.createPropertyAssignment(
                                        factory.createIdentifier("path"),
                                        factory.createStringLiteral("api"),
                                      ),
                                      factory.createPropertyAssignment(
                                        factory.createIdentifier("component"),
                                        factory.createIdentifier(
                                          "ApiComponent",
                                        ),
                                      ),
                                    ],
                                    true,
                                  ),
                                  factory.createObjectLiteralExpression(
                                    [
                                      factory.createPropertyAssignment(
                                        factory.createIdentifier("path"),
                                        factory.createStringLiteral("examples"),
                                      ),
                                      factory.createPropertyAssignment(
                                        factory.createIdentifier("component"),
                                        factory.createIdentifier(
                                          "ExamplesComponent",
                                        ),
                                      ),
                                    ],
                                    true,
                                  ),
                                  factory.createObjectLiteralExpression(
                                    [
                                      factory.createPropertyAssignment(
                                        factory.createIdentifier("path"),
                                        factory.createStringLiteral("**"),
                                      ),
                                      factory.createPropertyAssignment(
                                        factory.createIdentifier("redirectTo"),
                                        factory.createStringLiteral("examples"),
                                      ),
                                    ],
                                    true,
                                  ),
                                ],
                                true,
                              ),
                            ),
                            factory.createPropertyAssignment(
                              factory.createIdentifier("data"),
                              factory.createObjectLiteralExpression(
                                [
                                  factory.createPropertyAssignment(
                                    factory.createIdentifier("links"),
                                    factory.createArrayLiteralExpression(
                                      [
                                        factory.createObjectLiteralExpression(
                                          [
                                            factory.createPropertyAssignment(
                                              factory.createIdentifier("url"),
                                              factory.createStringLiteral(
                                                "api",
                                              ),
                                            ),
                                            factory.createPropertyAssignment(
                                              factory.createIdentifier("label"),
                                              factory.createStringLiteral(
                                                "Api",
                                              ),
                                            ),
                                          ],
                                          true,
                                        ),
                                        factory.createObjectLiteralExpression(
                                          [
                                            factory.createPropertyAssignment(
                                              factory.createIdentifier("url"),
                                              factory.createStringLiteral(
                                                "examples",
                                              ),
                                            ),
                                            factory.createPropertyAssignment(
                                              factory.createIdentifier("label"),
                                              factory.createStringLiteral(
                                                "Examples",
                                              ),
                                            ),
                                          ],
                                          true,
                                        ),
                                      ],
                                      true,
                                    ),
                                  ),
                                ],
                                true,
                              ),
                            ),
                          ],
                          true,
                        ),
                      ],
                      true,
                    ),
                  ),
                ],
                ts.NodeFlags.Const,
              ),
            );
            return newRoutes;
          }
        }
        return ts.visitEachChild(node, visit, context);
      }

      return ts.visitNode(rootNode, visit) as ts.SourceFile;
    },
  ]).transformed[0] as ts.SourceFile;

  // 5. Écrire le fichier modifié
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const newContent = printer.printFile(sourceFile);
  fs.writeFileSync(routingFilePath, newContent, "utf-8");

  console.log(`Page '${pageName}' créée avec succès!`);
}

// Exécuter la fonction principale
const pageName = process.argv[2];
createPage(pageName);
