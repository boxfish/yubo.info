Title: Random point picking inside an arbitrary polygon
Date: 2012-03-24 16:30
Category: Algorithm
Tags: algorithm
Slug: random-point-picking
Summary: A solution for randomly generating geographic locations (as points) inside a certain area (as polygons).

I come across the problem of randomly generating geographic locations (as points) inside a certain area (as polygons) for a simulation project. A simple solution is to generate and test random points until one is inside the polygon, which is really unpredictable of the time it takes. The solution here is based on [a post on Stack Overflow](http://stackoverflow.com/questions/240778/random-points-inside-a-polygon), aiming to generate a point from a uniform distribution within an arbitrary (convex) polygon. This is achieved in a few steps:

### Step 1
[Triangulate the polygon](http://en.wikipedia.org/wiki/Polygon_triangulation) i.e. find the set of triangles with pairwise non-intersecting interiors whose union is the whole polygon. An easy-to-use open source library (poly2tri) for doing polygon triangulation can be found at [here](http://code.google.com/p/poly2tri/). It follows the sweep-line algorithm for constrained Delaunay triangulation.

![Polygon triangulation](http://www.geom.uiuc.edu/~samuelp/final_delaunay.gif)

### Step 2
Pick one of the triangles randomly. The probability of a triangle getting picked equals to the area ratio between each triangle and the whole polygon. Each triangle is stored as a two-element tuple: the first element stores the coordinates, and the second is the area ratio as the weight. Then the randomly picking a triangle can be done by calling the following `pick_triangle`function.
	{% codeblock Pick triangles randomly lang:python %}
	import random
	def pick_triangle(triangles):
	    p = random.uniform(0.0, 1.0)
	    for triangle, weight in triangles:
	        if p &lt; weight:
	            break
	        p = p - weight
	    return triangle
	{% endcodeblock %}

### Step 3
Randomly pick a point inside the chosen triangle, following [the description on Mathworld](http://mathworld.wolfram.com/TrianglePointPicking.html). Let `v0`, `v1`, `v2` be vertices of the triangle, represented by their coordinates, so that `v0 = (x0,y0)`, etc. Then we generate two random numbers `p0` and `p1`, both drawn uniformly from the interval `[0,1]`. Then we calculate the coordinate of the random point `v` by `v = v0 + p0*(v1-v0) + p1*(v2-v0)`. <br /> Note that with probability of `0.5`, `v` lies outside the triangle. Whether `v` lies inside or outside the triangle can be easily tested: if `p0 + p1 > 1`, then `v` is outside the triangle (See the discussion [here](http://www.blackpawn.com/texts/pointinpoly/default.html)). In that case, we can generate a new point `v'` by `v' = v0 + (1-p0)*(v1-v0) + (1-p1)*(v2-v0)`, which will be inside the triangle.