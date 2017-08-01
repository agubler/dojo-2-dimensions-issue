import { w } from '@dojo/widget-core/d';
import { DNode, WidgetProperties } from '@dojo/widget-core/interfaces';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

import { Widget } from './widget';

export default class App extends WidgetBase {

	protected render(): DNode {

		return w(Widget, { });
	}
}
