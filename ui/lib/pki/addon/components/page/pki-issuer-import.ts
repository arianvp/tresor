import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type PkiActionModel from 'vault/vault/models/pki/action';

interface Args {
  model: PkiActionModel;
}

export default class PagePkiIssuerImportComponent extends Component<Args> {
  @tracked title = 'Import a CA';
}
