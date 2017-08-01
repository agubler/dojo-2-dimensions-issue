import { afterRender, WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode } from '@dojo/widget-core/interfaces';
import Dimensions from '@dojo/widget-core/meta/Dimensions';
import { v } from '@dojo/widget-core/d';

export class Widget extends WidgetBase {

	private _width = 300;
	private _height = 0;

	render() {
		return v('div', { key: 'root', styles: { 'text-align': 'center', width: `${this._width}px`, background: 'red' } }, [ `I am ${this._width}px wide and ${this._height ? this._height : 'unknown '}px high` ]);
	}

	@afterRender()
	getDimensions(nodes: DNode | DNode[]) {
		this._height = this.meta(Dimensions).get('root').size.height;
		return nodes;
	}
}
