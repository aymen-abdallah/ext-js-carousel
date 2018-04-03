/**
 * @author Aymen Abdallah <aymen.abdallah@gmail.com>
 * @docauthor Aymen Abdallah
 */
Ext.define('Carousel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'imageSrc', type: 'string' },
        { name: 'title', type: 'string' },
		{ name: 'alt', type: 'string' }
    ]
});