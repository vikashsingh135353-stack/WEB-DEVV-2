const btn = document.getElementById('btn')


btn.addEventListener('click', () => {
    const subhead = document.createElement('h2').textContent = "new sun heading"
    const image = document.createElement('img')
    image.setAttribute('src','https://imgs.search.brave.com/q5QFn5zaXym-tHP4K9JmCfM9mYvRRPONTaviINcXX7w/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/aW1nLWNvcnAuY29t/L2ltYWdlcy9zbGlk/ZXMvY2l0aWVzL2lt/Zy10YWl3YW4uanBn')
      

    document.body.append(subhead)
    document.body.append(image)

}
)