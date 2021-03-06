import { View } from '../general/view';
import { TextView } from '../general/textView';
import { LineBreakView } from '../general/lineBreakView';
import { CommitItemView } from '../commits/commitSectionView';
import { MagitRebasingState } from '../../models/magitRebasingState';

export class RebasingSectionView extends View {
  isFoldable = true;

  get id() { return 'Rebasing'; }

  constructor(rebasingState: MagitRebasingState) {
    super();
    this.subViews = [
      new RebaseSectionHeaderView(`Rebasing ${rebasingState.origBranchName} onto ${rebasingState.ontoBranch.name}`),
      ...rebasingState.upcomingCommits.map(c => new CommitItemView(c, 'pick')),
      new CommitItemView(rebasingState.currentCommit, 'join'),
      ...rebasingState.doneCommits.map(c => new CommitItemView(c, 'done')),
      new CommitItemView(rebasingState.ontoBranch.commitDetails, 'onto'),
      new LineBreakView()
    ];
  }
}

class RebaseSectionHeaderView extends TextView {

  constructor(text: string) {
    super(text);
  }

  onClicked() { return undefined; }
}