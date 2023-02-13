// import handlebars from 'handlebars';
import ejs from 'ejs';
import { readFileSync } from 'fs';
import MinifyHTML from 'html-minifier';
import type { NextApiRequest, NextApiResponse } from 'next';

function minify(view: string) {
  return MinifyHTML.minify(view, {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    decodeEntities: true,
    removeComments: true,
    removeCommentsFromCDATA: true,
    keepClosingSlash: true,
  });
}

function loadTemplate(tplName: string) {
  const tpl = readFileSync(
    `${process.cwd()}/templates/${tplName}.ejs`,
    'utf-8',
  );

  return tpl;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const template = loadTemplate('recheck');
  // const html = handlebars.compile(template)(JSON.parse(req.body));
  const html = ejs.render(template, JSON.parse(req.body));

  res.status(200).json({ data: minify(html) });
}
