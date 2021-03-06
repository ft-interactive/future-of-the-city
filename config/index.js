import article from './article';
import flags from './flags';
import people from './people';
import _ from 'lodash';

export default async function() {
  const d = await article();
  const f = await flags();

  // Groups the people by category
  const groups = _.groupBy(people, person => person.category);

  // This decides the order of the groups
  const groupNames = _.sortBy(_.uniq(people.map(p => p.category)));

  const sortedGroups = groupNames.map(name => {
    return {
      name: name,
      list: groups[name]
    };
  });


  console.log(sortedGroups)
  /*
  An experimental demo that gets content from the API
  and overwrites some model values. This requires the Link File
  to have been published. Also next-es-interface.ft.com probably
  isn't a reliable source. Also this has no way to prevent development
  values being seen in productions... use with care.

  try {
    const a = (await axios(`https://next-es-interface.ft.com/content/${d.id}`)).data;
    d.headline = a.title;
    d.byline = a.byline;
    d.summary = a.summaries[0];
    d.title = d.title || a.title;
    d.description = d.description || a.summaries[1] || a.summaries[0];
    d.publishedDate = new Date(a.publishedDate);
    f.comments = a.comments;
  } catch (e) {
    console.log('Error getting content from content API');
  }

  */

  return {
    ...d,
    groups: sortedGroups,
    flags: f,
  };
}
