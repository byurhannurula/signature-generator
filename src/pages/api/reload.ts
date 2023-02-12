/* eslint-disable eqeqeq, func-names */
import handlebars from 'handlebars';
import { readFileSync } from 'fs';
import MinifyHTML from 'html-minifier';
import type { NextApiRequest, NextApiResponse } from 'next';

handlebars.registerHelper('minify', (content, options) => {
  const view = options.fn(content);

  return MinifyHTML.minify(view, {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    decodeEntities: true,
    removeComments: true,
    removeCommentsFromCDATA: true,
    keepClosingSlash: true,
  });
});

function loadTemplate(tplName: string) {
  const tpl = readFileSync(
    `${process.cwd()}/templates/${tplName}.hbs`,
    'utf-8',
  );

  return handlebars.compile(tpl);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const template = loadTemplate('recheck');
  const html = template(JSON.parse(req.body));

  res.status(200).json({ data: html });
}
