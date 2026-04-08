# Schema Planning

In order to display things in the interconnected manner I want, I need to ensure the structure is well thought-out. Here I will begin to plan that.

## Entities

Everything will be an entity. Entities will have the following fields

- Meta Characteristics
  - **ID**: A unique identifier
  - **Category**: (e.g. "City", "Region", "Faction", "Character"...)
  - **RelatedTo**: (e.g. an entity with `Category: "City"` might have `RelatedTo: <RegionID>`, and an entity with `Category: "Character"` might have `RelatedTo: <FactionID>`). An entity can belong to multiple other entities.
  - **InteractiveMapImage**: (optional). Directs to the interactive map associated with this entity.
  - **PreviousMap**: (optional). Directs to the entity whose interactive map led to this one, allowing traversal backwards.
- Descriptive Characteristics
  - Name
  - Picture
  - Description
  - (optional text fields)

## InteractiveMapImage

This table contains information about interactive maps.

- **ID**: A unique identifier
- **ImageURL**: The location of the image
- **InteractiveSVG**: Data needed to form the SVG overlay that enables clicking to traverse the map
