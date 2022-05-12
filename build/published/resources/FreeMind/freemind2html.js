function toggle(id)
{
div_el = document.getElementById(id);
img_el = document.getElementById('img'+id);
if (div_el.style.display != 'none')
{
div_el.style.display='none';
img_el.src = '%resource(FreeMind/show.png)%';
}
else
{
div_el.style.display='block';
img_el.src = '%resource(FreeMind/hide.png)%';
};
};
