import * as core from '../../core';
import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * @author Aemon
 */

/**
 * A Grid filter.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
export default class GridFilter extends core.Filter
{
    /**
     *
     */
    constructor()
    {
        super(
            // vertex shader
            readFileSync(join(__dirname, './grid.vert'), 'utf8'),
            // fragment shader
            readFileSync(join(__dirname, './grid.frag'), 'utf8')
        );

        this.cellSize = 70;
        this.alpha = 0.5;
        this.lineWidth = 2.0;
        this.lineColor = [1.0, 1.0, 1.0, 1.0];
    }

    get modelViewMatrix()
    {
        return this.uniforms.modelViewMatrix;
    }
    set modelViewMatrix(value)
    {
        this.uniforms.modelViewMatrix = value;
    }

    get cellSize()
    {
        return this.uniforms.cellSize;
    }
    set cellSize(value)
    {
        this.uniforms.cellSize = value;
    }

    get alpha()
    {
        return this.uniforms.alpha;
    }
    set alpha(value)
    {
        this.uniforms.alpha = value;
    }

    get lineWidth()
    {
        return this.uniforms.lineWidth;
    }
    set lineWidth(value)
    {
        this.uniforms.lineWidth = value;
    }

    get lineColor()
    {
        return this.uniforms.lineColor;
    }
    set lineColor(value)
    {
        this.uniforms.lineColor = value;
    }
}
